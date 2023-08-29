import React ,{FunctionComponent, ReactNode}from 'react'
import { Button } from '@/features/base/components/form/Button'

interface ModalProps {
    children: ReactNode;
    isOpen: boolean;   
    onClose: () => void;
}

const Modal :FunctionComponent<ModalProps>= ({
    children,
    isOpen,
    onClose,
}) =>
{
    if(!isOpen) return null;

    return <div className='
            fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)]
            flex justify-center items-center
            ' onClick={() =>{onClose()}}
            >
                <div className='bg-white p-4 rounded w-[400px]' 
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {children}
                </div>
            </div>
}

const test = () => {
    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className='h-[300px]'>
        <Button label= "表示" onClick={
            () => {
                setIsOpen(true);
            }
        }/>
        <Modal isOpen={isOpen} 
                onClose={() => {setIsOpen(false);}}
        >
            <div className=''>test</div>
        </Modal>
    </div>
    
  )
}

export default test;