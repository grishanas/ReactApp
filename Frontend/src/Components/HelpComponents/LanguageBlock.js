
class TeacherLanguage
{
    constructor(props)
    {
        this.lang=props.lang;
        this.personalData=props.personalData?props.personalData:'';
        this.description = props.description?props.teacherDescripion:'';
    }

    setState(state)
    {
        this.personalData=state.personalData?state.personalData:'';
        this.description = state.description?state.teacherDescripion:'';
    }

    getState()
    {
        return {
            'lang':this.lang,
            'personalData':this.personalData,
            'teacherDescripion':this.description,
        }
    }
}


export {TeacherLanguage}