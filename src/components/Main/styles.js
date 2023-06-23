import styled from "styled-components";

const MainContainer = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${props=>(props.darkMode ? '#171823' : '#FAFAFA')};
    transition: all 0.3s ease-in-out;
`;
const HeaderImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 300px;
    width: 100%;
    background: linear-gradient(225deg, #5596FF 0%, #AC2DEB 100%);
    background-image: ${props=>(props.darkMode ? 'url("../../images/bg-desktop-light.jpg")' : 'url("../../images/bg-desktop-dark.jpg")')};
    transition: all 0.3s ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
`;
const ToDoSection = styled.section`
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    width: 541px;
    z-index: 1;
`;
    const ToDoSectionHeader = styled.div`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: inherit;
        font-weight: 700;
        font-size: 40px;
        letter-spacing: 15px;
        color: #FFFFFF;
        margin-bottom: 40px;
    `;
    const ToDoInputContainer = styled.div`
        width: 100%;
        height: 64px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
        background-color: ${props=>(props.darkMode ? '#25273D' : '#FFFFFF')};
        box-shadow: ${props=>(props.darkMode ?  'box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);' : '0px 35px 50px -15px rgba(194, 195, 214, 0.5)' )};
    transition: all 0.3s ease-in-out;
        border-radius: 5px;
        padding-left: 24px;
    `;
    const ToDoCheckBox= styled.input`
        
        height: 24px;
        width: 24px;
        border-radius: 50%;
        
        appearance: none;
        -webkit-appearance: none;
        background: none;
        border: 1px solid #E3E4F1;
        :checked {
            background: linear-gradient(135deg, #55DDFF 0%, #C058F3 100%);
        }
    `;
    const ToDoInput= styled.input`
        font-family: 'Josefin Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;

        letter-spacing: -0.25px;
        background-color: transparent;
        color: ${props=>(props.darkMode ? '#C8CBE7' : '#393A4B')};
    transition: all 0.3s ease-in-out;
        
        border: none;
        :focus{
            outline: none;
        }
    `;
    const ToDoListContainer = styled.div`
        width: 100%;
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        background-color: ${props=>(props.darkMode ? '#25273D' : '#FFFFFF')};
        
        box-shadow: ${props=>(props.darkMode ?  'box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);' : '0px 35px 50px -15px rgba(194, 195, 214, 0.5)' )};
    transition: all 0.3s ease-in-out;
        border-radius: 5px;
    `;
    const ToDoListElement = styled.div`
        padding-left: 24px;
        width: 100%;
        height: 64px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
        border-bottom: ${props=>(props.darkMode ? '1px solid #393A4B' : '1px solid #E3E4F1')};
    transition: all 0.3s ease-in-out;
    `;
    const ToDoListElementText = styled.p`
        font-family: 'Josefin Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        letter-spacing: -0.25px;
        text-decoration: ${props=>(props.isChecked ? 'line-through' : 'none')};
        color: ${props=>(props.darkMode ? '#C8CBE7' : '#494C6B')};
    transition: all 0.3s ease-in-out;
    `;
    const ToDoListFooter = styled.div`
        height: 50px;
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-family: 'Josefin Sans', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.194444px;
        color: ${props=>(props.darkMode ? '#5B5E7E' : '#9495A5')};
    transition: all 0.3s ease-in-out;
    `;
    const ToDoListFilterContainer = styled.div`
        display: flex;
        flex-direction: row;
        gap: 20px;
    `;
    const ToDoListFilter = styled.p`
        font-family: 'Josefin Sans', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        /* identical to box height */

        letter-spacing: -0.194444px;
        cursor: pointer;
        color: ${props=>(props.darkMode ? '#5B5E7E' : '#9495A5')};
    transition: all 0.3s ease-in-out;
        :hover{
            color: #494C6B;
        }
        &.active{
            color: #3A7CFD;
        }
    `;
    const TodoListCaption = styled.p`
        margin-top: 50px;
        font-family: 'Josefin Sans', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        letter-spacing: -0.194444px;

        color: ${props=>(props.darkMode ? '#5B5E7E' : '#9495A5')};
    transition: all 0.3s ease-in-out;
    `;

export {MainContainer,HeaderImage, ToDoSection, ToDoSectionHeader,ToDoInputContainer,ToDoCheckBox,ToDoInput,ToDoListContainer,ToDoListElement,ToDoListElementText,ToDoListFooter,ToDoListFilterContainer,ToDoListFilter,TodoListCaption};