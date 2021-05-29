import React from 'react';
import { css } from '@emotion/react';
import Dimmer from 'components/atoms/Dimmer';
import Modal from 'components/atoms/Modal';
import JobCard from 'components/atoms/JobCard';
import TextButton from 'components/atoms/TextButton';
import { flexColumn, flexRow } from 'styles/element';

const dummy = 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg';

const SelectJobModal = ({
  isVisible = false,
  onClickSelectNextTimeButton,
}: {
  isVisible: boolean;
  onClickSelectNextTimeButton: () => void;
}) => {
  return (
    <>
      {isVisible && (
        <Dimmer>
          <Modal padding="30px 60px">
            <div
              css={css`
                ${flexColumn}
                text-align: center;
              `}
            >
              <span
                css={css`
                  font-size: 40px;
                `}
              >
                직업이 어떻게 되세요?
              </span>
              <span
                css={css`
                  margin-top: 10px;
                  font-size: 30px;
                `}
              >
                업무 분야에 맞게 커리어 아카이빙 템플릿을 제공해드려요!
              </span>
              <span
                css={css`
                  margin: 10px 0;
                  font-size: 20px;
                `}
              >
                입력하신 직업은 &lt;마이페이지&gt;에서 변경할 수 있어요.
              </span>
              <div css={flexRow}>
                <JobCard backgroundImageUrl={dummy}>개발</JobCard>
                <JobCard backgroundImageUrl={dummy}>디자인</JobCard>
                <JobCard backgroundImageUrl={dummy}>기획</JobCard>
              </div>
              <div css={flexRow}>
                <JobCard backgroundImageUrl={dummy}>마케팅</JobCard>
                <JobCard backgroundImageUrl={dummy}>HR/경영지원</JobCard>
                <JobCard backgroundImageUrl={dummy}>기타</JobCard>
              </div>
              <TextButton
                margin="30px 0 0 auto"
                onClick={onClickSelectNextTimeButton}
              >{`다음에 선택하기 >`}</TextButton>
            </div>
          </Modal>
        </Dimmer>
      )}
    </>
  );
};

export default SelectJobModal;
