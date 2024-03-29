import {create} from 'zustand'

interface AuthModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}


/**
 * create :
 * 
 * set() used to manipulate Store (AuthModalStore)
 * takes an object
 * 
 * overall creates a "controller" - 
 * isOpen, onOpen, on Close are defined for the entire application
 */



/**
 * These settings are defined here, and we call them in auth-modal.tsx 
 * authModal.FUNCTION_NAME is used within the Modal's props
 */
const useRegisterModal = create<AuthModalStore>((set, get) => ({
    isOpen: false,
    register: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useRegisterModal;