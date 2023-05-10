import classes from './FileComponent.module.scss';

export const FileComponent = ({id,name, index}) => {
    return (
        <div className={classes.content}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Index: {index}</div>
            <div>Type: file</div>
        </div>
    )
}