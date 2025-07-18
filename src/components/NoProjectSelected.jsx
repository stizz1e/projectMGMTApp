import noProjImage from '../assets/no-projects.png';
import Button from './Button';
export default function NoProjectLoded({onStartAdd}){
    return(
        <div className="mt-24 text-center w-2/3">
            <img src={noProjImage} alt="An empty task list" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-boldtext-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or start a new one.</p>
            <p className="mt-8">
                <Button onClick={onStartAdd}>Create New Project</Button>
            </p>
        </div>
    )
}