import {
    CategoryTitle, ProjectKeywords,
    ProjectP,
    ProjectTitle,
    ProjectTitleLeft, ProjectTitleRight,
    ProjectUrl,
    ProjectWrapper,
    Wrapper
} from "./RightColumn.styles.ts";

const RightColumn = () => {
    return (
        <Wrapper>
            <CategoryTitle>PROJECTS</CategoryTitle>
            {/*Twinklecube*/}
            <ProjectWrapper>
                <ProjectTitle>
                    <ProjectTitleLeft />
                    <ProjectTitleRight>
                        <ProjectUrl href='https://www.twinklecube.com/'>
                            https://www.twinklecube.com/
                        </ProjectUrl>
                    </ProjectTitleRight>
                </ProjectTitle>

                <ProjectP>
                    Twinklecube is a platform to play SUDOKU puzzle game online
                    on browser without having to be registered.
                </ProjectP>
                <ProjectP>
                    This project is consisted of three microservice and three frontend
                    projects including a custom made React Typescript UI Library.
                    Entry point is a NGINX API Gateway, hosted in AWS.
                </ProjectP>
                <ProjectKeywords>
                    JavaScript, Typescript, Node, React, Express, MongoDB, Webpack, Babel, Styled Components
                </ProjectKeywords>
            </ProjectWrapper>

            {/*https://www.npmjs.com/package/@twinklecube/create-ui-library*/}
            <ProjectWrapper>
                <ProjectTitle>
                    <ProjectTitleLeft />
                    <ProjectTitleRight>
                        <ProjectUrl href='https://www.npmjs.com/package/@twinklecube/create-ui-library'>
                            https://www.npmjs.com/package/@twinklecube/create-ui-library
                        </ProjectUrl>
                    </ProjectTitleRight>
                </ProjectTitle>

                <ProjectP>
                    twinklecubeUI is a simple but feature rich, developer friendly and complete React and TypeScript UI Library
                    with adequate documentation.
                </ProjectP>
                <ProjectP>
                    This library is configured to work with almost all mainstream styling including css, sass,
                    less, styled components and emotion
                </ProjectP>
                <ProjectP>
                    Development server: Webpack, Production build: Rollup
                </ProjectP>
                <ProjectP>
                    Try it out: <em>npx @twinklecube/create-ui-library</em>
                </ProjectP>
                <ProjectKeywords>
                    Javascript, Typescript, React, Webpack, Rollup, Babel
                </ProjectKeywords>
            </ProjectWrapper>

            {/*https://www.npmjs.com/package/@twinklecube/create-react-app*/}
            <ProjectWrapper>
                <ProjectTitle>
                    <ProjectTitleLeft />
                    <ProjectTitleRight>
                        <ProjectUrl href='https://www.npmjs.com/package/@twinklecube/create-react-app'>
                            https://www.npmjs.com/package/@twinklecube/create-react-app
                        </ProjectUrl>
                    </ProjectTitleRight>
                </ProjectTitle>

                <ProjectP>
                    This is a React18/Typescript starter project
                </ProjectP>
                <ProjectP>
                    Try it out: <em>npx @twinklecube/create-react-app my-react-app</em>
                </ProjectP>
                <ProjectKeywords>
                    Javascript, Typescript, React, Webpack, Rollup, Babel
                </ProjectKeywords>
            </ProjectWrapper>


            <CategoryTitle>EXPERIENCE</CategoryTitle>

            <ProjectWrapper>
                <ProjectTitle>
                    <ProjectTitleLeft />
                    <ProjectTitleRight>
                        <ProjectUrl>
                            Software Developer - CHECK24 Vergleichsportal Geldanlage GmbH
                        </ProjectUrl>
                    </ProjectTitleRight>
                </ProjectTitle>

                <ProjectP>
                    From September 2021 till Present.
                </ProjectP>
                <ProjectP>
                </ProjectP>
                <ProjectKeywords>
                    Javascript, Typescript, React, Webpack, Rollup, Babel
                </ProjectKeywords>
            </ProjectWrapper>

        </Wrapper>
    );
};

export default RightColumn;
