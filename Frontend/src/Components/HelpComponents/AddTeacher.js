import {TeacherLanguage} from "./LanguageBlock"

class AddTeacher
{

    #Photo
    #Languages
    #isTeacherSafe
    constructor(props)
    {
        this.#isTeacherSafe=false;
    }

    setState(state)
    {
        this.#isTeacherSafe= true;
        if(this.#Languages!=undefined)
        {
            this.#Languages.map((lang)=>{
                if(lang.lang!=state.lang)
                {
                    this.#Languages.push(new TeacherLanguage(state))
                    return;
                }
            })
        }else
        {
            this.#Languages= new Array();
            this.#Languages.push(new TeacherLanguage(state))
        }
        console.log('after add new Language')
        this.#Photo=state.photo;
    }

    getState()
    {
        return {
            'Languages':this.#Languages,
            'photo':this.#Photo,
        }
    }

}