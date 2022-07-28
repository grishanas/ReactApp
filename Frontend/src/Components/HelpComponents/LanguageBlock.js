class TeacherLanguage
{
    constructor(props)
    {
        this.lang=props.lang;
        this.personalData=props.personalData;
        this.description = props.description;
    }

    getState()
    {
        return {
            'lang':this.lang,
            'personalData':this.personalData,
            'description':this.description,
        }
    }
}


export {TeacherLanguage}