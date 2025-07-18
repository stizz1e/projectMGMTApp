import Input from './Input';
import Modal from './Modal';
import { useRef } from 'react';

export default function NewProject({onAdd, onCancel}){
     const title = useRef();
     const desc = useRef();
     const dueDate = useRef();
     const modal = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDesc = desc.current.value;
        const enteredDueDate = dueDate.current.value;
        
        if(enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDueDate
        })
    }

    return (
      <>
        <Modal ref={modal} buttonCaption="OK">
          <h2 className="text-xl font-boldtext-stone-700 my-4">Invalid Input</h2>
          <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
          <p className="text-stone-600 mb-4">Please enter valid data in every field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
          <menu className="flex items-center justify-end gap-4 my-4">
            <li>
              <button 
                onClick={onCancel} 
                className="text-stone-800 hover:text-stone-950">
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={handleSave}
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
              >
                Save
              </button>
            </li>
          </menu>
          <div>
            <Input type="text" ref={title} label="Title" />
            <Input ref={desc} label="Description" textarea />
            <Input type="date" ref={dueDate} label="Due Date" />
          </div>
        </div>
      </>
    );
}