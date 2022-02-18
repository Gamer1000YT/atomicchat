import { useState } from 'react';

const withModal = ModalComponent => WrapperComponent => {
    return function () {
        const [isModalShown, setIsModalShown] = useState(false);

        return (
            <>
            <WrapperComponent toggleModal={setModalShown}/>
            {isModalShown && <ModalComponent toggleModal={setIsModalShown} />}
            </>
        )
    }
}
export default withModal;