import styled from "styled-components";

const NoChoiceWrapper = styled.div`
    text-align: center;
    padding: 10px;
    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
    }
`;
const SubText = styled.div`
    color: red;
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    font-style: italic;
    padding: 5px;
`;
export const NoChoiceLeft = () => {
    return (
        <NoChoiceWrapper>
            <img src={"me/cry.jpg"} className="GF_01" alt="GF_01" />
            <SubText>
                Thưa vợ, rất tiếc. Số lần chọn đã hết. Vợ vui lòng liên hệ chồng của vợ để có thể mở lại quyền lựa chọn. 🐥👨🏿‍🤝‍👨🏿👨🏿
            </SubText>
        </NoChoiceWrapper>
    )
}