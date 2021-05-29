import { css } from '@emotion/react';
import React from 'react';

interface JobCardProps {
  backgroundImageUrl: string;
  children: React.ReactNode;
}

const JobCard = ({ backgroundImageUrl, children }: JobCardProps) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 180px;
        background-color: lightcoral;
        margin-right: 10px;
        margin-top: 10px;
        font-size: 20px;
        background-image: url(${backgroundImageUrl});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        :nth-of-type(3) {
          margin-right: 0px;
        }
      `}
    >
      {children}
    </div>
  );
};

export default JobCard;
