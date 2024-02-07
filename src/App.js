import * as Styled from './styles/Home'
import { useState, useEffect, useRef } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import 'dayjs/locale/pt-br';

import dayjs from 'dayjs';

import List from './components/List/List';

import Modal from '@mui/material/Modal';

import { motion, AnimatePresence, useCycle } from 'framer-motion';

function App() {

  const input = useRef(null)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false);

  const [lists, setLists] = useState(["Casa", "Estudo", "Importante"])
  const [selectedList, setSelectedList] = useState("")
  const handleSelect = (value) => {
    setSelectedList(value)
  }

  const [listCreateError, setListCreateError] = useState(false)

  const [showInput, setShowInput] = useState(false)
  const handleInput = (state) => {
    setShowInput(state)
  }

  function checkIfSubmited(e) {
    if (e.key === "Enter") {
      if (lists.find(item => item === e.target.value) === undefined) {
        if (e.target.value !== "") {
          setLists(oldValues => [...oldValues, e.target.value])
          console.log(lists)
        }
        
        setShowInput(false)

      } else {
        setListCreateError(true)
      }
    }
  }

  const deleteList = () => {
    handleClose()
    setLists(oldValues => oldValues.filter(item => item !== selectedList))
  }

  useEffect(() => {
    setSelectedList(lists[0])
  }, [])

  useEffect(() => {
    if (!showInput && input.current !== null) {
      input.current.value = ""
    }

    if (showInput) {
      input.current.focus()
    } else {
      setListCreateError(false)
    }
  }, [showInput])


  const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

  return (
    <>
      <Styled.ListContainer>
        <div className='title'>
          <svg fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/></svg>
          <h1> TodoList </h1>
        </div>

        <h4> Minhas listas </h4>
        { lists.map((item, key) => (
          <List 
            key={key}
            name={item}
            isSelected={selectedList === item}
            selection={handleSelect}
            remove={handleOpen}
          />
        )) }

        { showInput &&
          <input ref={input} placeholder='Nome da lista' onKeyDown={checkIfSubmited} onBlur={() => handleInput(false)}/>
        }

        { listCreateError &&
          <Styled.CreateError>
            <svg fill="currentColor" viewBox="0 0 16 16"><path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"/><path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/></svg>
            <p> Já existe uma lista com esse nome </p>
          </Styled.CreateError>
        }

        <Styled.CreateList onClick={() => handleInput(true)}>
          <svg fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg>
          <p> Adicionar lista </p>
        </Styled.CreateList>
      </Styled.ListContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Styled.ModalContainer>
          <img 
            width={130} 
            height={130}
            src='./question.png'
          />
          
          <h2> Tem certeza disso? </h2>
          <p> Cuidado! Ao confirmar, todo o seu planejamento para essa lista será perdido. </p>

          <button onClick={deleteList}> Excluir lista </button>
          <a onClick={handleClose}> Agora não </a>
        </Styled.ModalContainer>
      </Modal>




      <Styled.ListItemsContainer>
        <Styled.Title>
          <div className='date'>
              <h1> { months[dayjs().locale("pt-br").month()][0] + months[dayjs().locale("pt-br").month()][1] + months[dayjs().locale("pt-br").month()][2] } </h1>
              <h1> { new Date().getDate() } </h1>
          </div>

          <h1> Boa tarde </h1>
        </Styled.Title>
      </Styled.ListItemsContainer>

    </>
  );
}

export default App;
