function createCalc(){
    return {
        display:document.querySelector('.display'),
        btnClear:document.querySelector('.btn-clear'),

        init() {
            this.clickBoton();
            this.keyEnter();
            
        },
        keyEnter() {
            this.display.addEventListener('keyup', (e)=> {
                if (e.key === 13){
                    this.makeAccount();
                }
            });
        },
        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);

        },
        makeAccount(){
            let cont = this.display.value;
            try{
                cont = eval (cont);

                if(!cont){
                    alert('Conta invalida');
                    return;
                }
                this.display.value = String(cont);
            } catch(event){
                alert('Conta invalida');
                return;
            }
        },

        clickBoton(){
            document.addEventListener('click',function(event){
                const el = event.target;

                if (el.classList.contains('btn-num')){
                    this.btnForDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq')){
                    this.makeAccount()
                }
            }.bind(this));
        },
        btnForDisplay(valor){
            this.display.value += valor;
        }
    };

}
const calc = createCalc();
calc.init();