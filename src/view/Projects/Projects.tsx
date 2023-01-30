import { useState } from "react";

// STYLES
import * as Styled from "./ProjectsStyled";

// LIBRARIES
import { useCurrentDevice } from "hooks/useCurrentDevice";
import { useFormatMessage } from "hooks/useFormatMessage";
import { useNavigate } from "react-router-dom";

// MISC
import { investProjectsList } from "mocks/investMockPage";
import { DEVICE_TYPE } from "constants/variables";
import { completedProjectsMock } from "mocks/completedProjectsMock";

// COMPONENTS
import CustomCarousel from "components/CustomCarousel/CustomCarousel";
import TitleAtom from "components/Atoms/CustomTitle/CustomTitle";
import CustomPagination from "components/CustomPagination/CustomPagination";
import CustomProjectCard from "components/CustomProjectCard/CustomProjectCard";
import CardCarousel from "components/CardCarousel/CardCarousel";
import TextAtom from "components/Atoms/CustomText/CustomText";

const Projects = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const { currentDevice } = useCurrentDevice();
  const navigate = useNavigate();

  // CONSTANTS USING HOOKS
  const [projects, setProjects] = useState<
    { title: string; text: string; source: string; path: string }[]
  >([]);

  const pageSize =
    currentDevice === DEVICE_TYPE.DESKTOP && currentDevice !== DEVICE_TYPE.NONE
      ? 12
      : 3;

  // GENERAL CONSTANTS

  const localPage = Number(localStorage.getItem("pageCurrentNumber"));

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleNav = (path: string) => {
    navigate(`/project/${path}`);
    // navigate(0);
  };

  return (
    <Styled.ProjectsContainer>
      <Styled.ProjectsListContainer>
        <Styled.TitleContainer>
          <TextAtom
            textStyle="paragraphDark"
            title={useFormatMessage("projectsPageTitle")}
          />
          {currentDevice === DEVICE_TYPE.DESKTOP && (
            <CustomPagination
              pageSize={12}
              list={investProjectsList}
              setProjects={setProjects}
              id={1}
              page={localPage === 0 ? 1 : localPage}
            />
          )}
        </Styled.TitleContainer>
        <Styled.ProjectMappingContainer>
          {projects?.map((list, index) => {
            return (
              <Styled.CardContainer
                key={index}
                onClick={() => handleNav(list.path)}
              >
                <CustomProjectCard
                  key={index}
                  title={list.title}
                  text={list.text}
                  source={list.source}
                  type="card"
                  isFullWidth={true}
                />
              </Styled.CardContainer>
            );
          })}
        </Styled.ProjectMappingContainer>
        <Styled.BottomPaginationContainer>
          <CustomPagination
            pageSize={pageSize}
            list={investProjectsList}
            setProjects={(page: any) => {
              setProjects(page);
            }}
            id={1}
            page={localPage === 0 ? 1 : localPage}
          />
        </Styled.BottomPaginationContainer>
      </Styled.ProjectsListContainer>
      <Styled.FundsContainer>
        <TextAtom
          textStyle="paragraphDark"
          title={useFormatMessage("futureProjectsTitle")}
        />

        <Styled.CarouselContainer>
          {currentDevice === "desktop" ? (
            <CustomCarousel data={completedProjectsMock} />
          ) : (
            <CardCarousel content={completedProjectsMock} type="project" />
            // put type card in the mock
          )}
        </Styled.CarouselContainer>
      </Styled.FundsContainer>
    </Styled.ProjectsContainer>
  );
};

export default Projects;
