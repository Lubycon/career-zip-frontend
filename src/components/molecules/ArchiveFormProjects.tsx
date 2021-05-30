import { css } from '@emotion/react';
import Section from 'components/atoms/Section';
import Text from 'components/atoms/Text';
import { flexRow } from 'styles/element';
import { IProject } from 'types';

interface IArchiveFormProjects {
  projects: IProject[];
}

const ArchiveFormProjects = ({ projects }: IArchiveFormProjects) => {
  return (
    <Section backgroundColor="lightGray" padding="20px" alignItems="flex-start">
      <Text fontSize="20px">작성된 프로젝트</Text>
      <div
        css={css`
          ${flexRow} margin-top: 15px;
        `}
      >
        {projects.map((el) => (
          <Text key={el.id}>{el.title}</Text>
        ))}
      </div>
    </Section>
  );
};

export default ArchiveFormProjects;
