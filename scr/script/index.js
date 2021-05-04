function Calc (){
    this.display = document.querySelector('.display');

    this.catchClick = () => {
        document.addEventListener('click',( event => {
            const element = event.target;
            if (element.classList.contains('btn-num')) this.addNumDisplay(element);
            if (element.classList.contains('btn-clear')) this.clear();
            if (element.classList.contains('btn-del')) this.del();
            if (element.classList.contains('btn-eq')) this.makeAccount();
        }));
    };

    this.addNumDisplay = (element)=> {
        this.display.value += element.innerText;
        this.display.focus();
    };

    this.clear = ()=> this.display.value = '';
    this.del = () => this.display.value= this.display.value.slice(0, -1);
    this.makeAccount = () => {
        try {
            const cont = eval(this.display.value);
            if (!cont) {
                alert('Conta invalida');
                return;
            }

            this.display.value = String (cont);

        } catch (e){
            alert('conta invalida');
            return;
        }
    };

    this.captuEnter = () =>{
        document.addEventListener('keyup', e =>{
            if (e.key === 13) return;
            this.makeAccount()
        });
    };
    this.init = () => {
        this.catchClick();
        this.captuEnter();
    };
}
const calc = new Calc ();
calc.init();