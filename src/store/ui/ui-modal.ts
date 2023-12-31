import { create } from 'zustand'

interface State{
    isSideModalOpen:boolean;

    openSideModal:()=>void;
    closeSideModal:()=>void;
}

export const useUIModal = create<State>()((set) => ({
    isSideModalOpen:false,
    openSideModal:()=>set({isSideModalOpen:true}),
    closeSideModal:()=>set({isSideModalOpen:false})

}))