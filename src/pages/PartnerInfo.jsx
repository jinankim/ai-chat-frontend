import React, { useState } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import PrevButton from './../components/PrevButton';
import RadioGroup from '../components/RadioGroup';
import { genderList, infoContentList } from '../data/common';
import { initialPartnerInfo } from '../data/initialState';
import Input from '../components/Input';

const PartnerInfo = ({handlePartnerInfo}) => {
  // logic
  const history = useNavigate()

  const [partnerInfo, setPartnerInfo] = useState(initialPartnerInfo)

  const handleClick = () => {
    history('/chat');
    handlePartnerInfo(partnerInfo);
  };

const handleGenderData = (gender) => {
  console.log("gender", gender);
  const resultData = {...partnerInfo, gender}
  setPartnerInfo(resultData)
};

const handleInfoContent = (label, value) => {
  // console.log("label", label);
  // console.log("value", value);
  const resultData = {...partnerInfo, [label]: value}
  setPartnerInfo(resultData)
  // console.log("resultData", resultData);
};

// useEffect ( () => {
//  console.log('partnerInfo', partnerInfo);
// }, [partnerInfo]) 

  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-date-blue-600 fixed -z-10 -left-60 -top-104"></i>
      {/* START:뒤로가기 버튼 */}
      <PrevButton />
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* START:타이틀 영역*/}
        <Title mainTitile={"상대방을 알려주세요"} />
        {/* START:info 영역 */}
        {/* END:타이틀 영역*/}
        <form className="pt-20">
          {/* START:성별 체크 */}
          <RadioGroup items={genderList} defaultCheckedData= {partnerInfo.gender} onChange={handleGenderData}/>
          {/* END:성별 체크 */}
          {/* START:input 영역 */}
          <div>
            {infoContentList.map ((infoContent) => (
              <Input 
                key = {infoContent.id}
                label={infoContent.label}
                inputType={infoContent.inputType} 
                text={infoContent.text}  
                placeholder={infoContent.placeholder}
                onChange={handleInfoContent}
              />
            ))}
          </div>
          {/* END:input 영역 */}
        </form>
        {/* END:info 영역 */}

        {/* START:Button 영역 */}
        <Button 
          text = {'인공지능 선생님과 상담하기~'} 
          color = {"bg-date-blue-700"} 
          onClick={handleClick} 
        />
        {/* END:Button 영역 */}
      </div>
    </div>
  );
};

export default PartnerInfo;
