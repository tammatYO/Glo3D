const validate = () => {
    const formName = document.querySelectorAll('[name="user_name"]')
    const formEmail = document.querySelectorAll('[type=email]')
    const formMsg = document.querySelectorAll('[placeholder="Ваше сообщение"]')
    const formNum = document.querySelectorAll('[type=tel]')

    formName.forEach(formName =>
        formName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]/g, '') 
    }))

    formEmail.forEach(formEmail =>
        formEmail.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-z@\-\.\!\~\*\']/g, '') 
    }))

    formMsg.forEach(formMsg =>
        formMsg.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]/g, '') 
    }))

    formNum.forEach(formNum =>
        formNum.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-]/g, '') 
    }))
}

validate()