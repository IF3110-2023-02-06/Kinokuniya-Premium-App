const loginFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"current-username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Name",
        labelFor:"name",
        id:"name",
        name:"name",
        type:"text",
        autoComplete:"name",
        isRequired:true,
        placeholder:"Full name"
    },
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

const addBookFields=[
    {
        labelText:"Title",
        labelFor:"title",
        id:"title",
        name:"title",
        type:"text",
        autoComplete:"title",
        isRequired:true,
        placeholder:"Title"
    },
    {
        labelText:"Category",
        labelFor:"category",
        id:"category",
        name:"category",
        type:"text",
        autoComplete:"category",
        isRequired:true,
        placeholder:"Category"
    },
    {
        labelText:"Publication Date",
        labelFor:"publicationDate",
        id:"publicationDate",
        name:"publicationDate",
        type:"date",
        autoComplete:"publication-date",
        isRequired:true,
        placeholder:"Publication Date"   
    },
    {
        labelText:"Price",
        labelFor:"price",
        id:"price",
        name:"price",
        type:"number",
        autoComplete:"price",
        isRequired:true,
        placeholder:"Price"
    },
    {
        labelText:"Description",
        labelFor:"description",
        id:"description",
        name:"description",
        type:"text",
        autoComplete:"description",
        isRequired:true,
        placeholder:"Description"   
    },
    {
        labelText:"Series",
        labelFor:"series",
        id:"series",
        name:"series",
        type:"text",
        autoComplete:"series",
        isRequired:true,
        placeholder:"Series"
    }
]

export {loginFields,signupFields, addBookFields}