import styled from '@emotion/styled';
import { Flex, Text } from 'rebass';
import { BLUE, GRAY } from 'styles/colors';
import { IProject } from 'types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  background-color: ${GRAY[4]};
  border-radius: 10px;
  padding: 20px;
`;

interface ProjectsBlockProps {
  title: string;
  description?: string;
  projectList: IProject[];
}

const ProjectsBlock = ({ title, description, projectList }: ProjectsBlockProps) => {
  return (
    <Wrapper>
      <Flex>
        <Text>{title}</Text>
        {description && (
          <Text fontSize="13px" color={GRAY[3]} margin="0 0 0 20px">
            {description}
          </Text>
        )}
      </Flex>
      <Flex margin="20px 0 0 0" flexWrap="wrap">
        {projectList.map(({ id, title: projectTitle }) => (
          <Text
            key={id}
            fontSize="16px"
            color={BLUE[1]}
            margin="0 0 0 20px"
            lineHeight="25px"
          >{`# ${projectTitle}`}</Text>
        ))}
      </Flex>
    </Wrapper>
  );
};

export default ProjectsBlock;
