import React from 'react';
import Header from './Header';
import ActionAdd from './ActionAdd';
import ActionSubstract from './ActionSubstract';
import ActionMult from './ActionMult';
import ActionDivide from './ActionDivide';
import ActionClear from './ActionClear';
import Form from './Form';
import AnswerModal from './AnswerModal';

export default class Calculation extends React.Component {
    state = {
        answer: 'NA',
        selected: undefined
    }
    handleAdd = () => {
      const numone = parseInt(document.getElementById('val1').value);
      const numtwo = parseInt(document.getElementById('val2').value);
        const sum = numone + numtwo;
        if (sum===0 || sum) {
            this.setState(() => ({
                answer: sum,
                selected: true
          }))
        }
    };
  
    handleSubstract = () => {
        const numone = parseInt(document.getElementById('val1').value);
        const numtwo = parseInt(document.getElementById('val2').value);
        const diff = numone - numtwo;
        if (diff===0 || diff) {
            
            this.setState(() => ({
                answer: diff,
                selected: true
            }))
        }
    };
  
    handleMult = () => {
        const numone = parseInt(document.getElementById('val1').value);
        const numtwo = parseInt(document.getElementById('val2').value);
        const mult = numone * numtwo;
        if (mult===0 || mult) {
            this.setState(() => ({
                answer: mult,
                selected: true
          }))
        }
    };
  
    handleDivide = () => {
        const numone = parseInt(document.getElementById('val1').value);
        const numtwo = parseInt(document.getElementById('val2').value);
        const divide = numone / numtwo;
        if (divide===0 || divide) {
            this.setState(() => ({
                answer: divide,
                selected: true
          }))
        }
    };
  
    handleClear = () => {
        document.getElementById('val1').value = '';
        document.getElementById('val2').value = '';
    };
    
    handleClearSelected = () => {
        this.setState(()=>({ selected: false}))
    }

    render() {
      return (
        <div>
          <Header />
          <Form />
          <ActionAdd handleAdd={this.handleAdd} />
          <ActionSubstract handleSubstract={this.handleSubstract} />
          <ActionMult handleMult={this.handleMult} />
          <ActionDivide handleDivide={this.handleDivide} />
            <ActionClear handleClear={this.handleClear} />
              <AnswerModal
                  answer={this.state.answer}
                  selected={this.state.selected} 
                  handleClearSelected={this.handleClearSelected}
              />
        </div>
      )
    }
  }