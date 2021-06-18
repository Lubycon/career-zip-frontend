/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from '@emotion/styled';
import EmptyListBlock from 'components/molecules/EmptyListBlock';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Flex, Text } from 'rebass';
import { selectArchivingList, selectIsLoading } from 'slices/archiving-list';
import { GRAY, LIGHT_GRAY } from 'styles/colors';

interface IArchiving {
  id: number;
  number: number;
  date: string;
  projects: { id: number; title: string }[];
  createdAt: string;
}

const ListRow = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  > div {
    border-bottom: 1px solid ${LIGHT_GRAY[2]};
  }

  :last-of-type > div {
    border-bottom: none;
  }
`;

const Archiving = ({ number, id, date, projects, createdAt }: IArchiving) => {
  const history = useHistory();
  return (
    <ListRow type="button" onClick={() => history.push(`/archive/${id}`)}>
      <Flex padding="20px 0">
        <Text fontSize="18px" color={GRAY[3]}>
          {number}.
        </Text>
        <Flex flexDirection="column" flex="1" marginLeft="25px" textAlign="left">
          <Text fontSize="20px" color={GRAY[1]} fontWeight="bold">
            {date}
          </Text>
          <Flex marginTop="10px" marginLeft="10px">
            <Flex>
              {projects.map((project) => (
                <Text
                  key={project.id}
                  fontSize="14px"
                  color={GRAY[2]}
                  marginRight="20px"
                >{`#${project.title}`}</Text>
              ))}
            </Flex>
            <Text marginLeft="auto" color={GRAY[2]}>{`작성일: ${createdAt}`}</Text>
          </Flex>
        </Flex>
      </Flex>
    </ListRow>
  );
};

const ArchivingListTable = () => {
  const isLoading = useSelector(selectIsLoading);
  const list = useSelector(selectArchivingList);

  if (isLoading) return null;
  return (
    <Flex flexDirection="column" marginTop="15px">
      {list.length === 0 && <EmptyListBlock />}
      {list.map(({ id, startDate, endDate, createdDateTime, projects }, i) => (
        <Archiving
          key={id}
          number={i + 1}
          id={id}
          date={`${startDate}(월) ~ ${endDate}(금)`}
          createdAt={createdDateTime}
          projects={projects}
        />
      ))}
    </Flex>
  );
};

export default ArchivingListTable;
