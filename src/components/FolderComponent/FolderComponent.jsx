import { useMemo } from 'react';
import { renderComponent } from '../../utils';
import classes from "./FolderComponent.module.scss";
export const FolderComponent = ({id, name, innerContent, index}) => {
    const innerContentNames=useMemo(()=>innerContent?.map(item=>item.name).join(', '),[innerContent]);
    return (
        <div className={classes.content}>
            <div className={classes.cell}>
                <div className={classes.label}>№</div>
                <div className={classes.value}>{index}</div>
            </div>
            <div className={classes.cell}>
                <div className={classes.label}>Название</div>
                <div className={`${classes.value} ${classes.name}`}>{name}</div>
            </div>
            <div className={classes.cell}>
                <div className={classes.label}>Очередность</div>
                <div className={classes.index}>{index}</div>
            </div>
            <div className={classes.cell}>
                <div className={classes.label}>Подкатегории</div>
                <div className={classes.index}>{innerContentNames}</div>
            </div>
            <div className={classes.settingsBox}>
                <div>{innerContent.length}</div>
            </div>
            <div>
                {innerContent?.map((item, index) => renderComponent(item, index))}
            </div>
        </div>
    )
}