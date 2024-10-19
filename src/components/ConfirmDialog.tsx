import styled from "styled-components";

type ConfirmDialogProps = {
    isOpen: boolean;
    handleConfirm: () => void;
    handleCancel: () => void;
}

const DialogWrapper = styled.div`
    position: fixed;
    width: 330px;
    height: 133px;
    background: #fff;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const CardTitle = styled.div`
    font-size: 12px;
    color: #BF4F74;
    font-weight: 500;
    padding: 30px;
`;

const ButtonWrapper = styled.div`
    background: #BF4F74;
    color: #fff;
    width: 80px;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    font-size: 12px;
    font-weight: 500;
`;
const FooterWrapper = styled.div`
    display: flex;
    align-items; center;
    gap: 16px;
    justify-content: center;
    
    .cancelBtn {
        background: #aaa;
        color: #333;
    }
`;
const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
`;
export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ isOpen, handleConfirm, handleCancel }) => {
    if (!isOpen) {
        return <></>;
    }
    return (
        <>
            <Overlay />
            <DialogWrapper>
                <CardTitle>{'Đây có phải quyết định cuối cùng của vợ? 😏'}</CardTitle>
                <FooterWrapper>
                    <ButtonWrapper onClick={handleConfirm}>Chốt</ButtonWrapper>
                    <ButtonWrapper onClick={handleCancel} className="cancelBtn">Bỏ</ButtonWrapper>
                </FooterWrapper>
            </DialogWrapper>
        </>
    )
}