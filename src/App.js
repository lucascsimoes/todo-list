import * as Styled from './styles/Home'
import { useState, useEffect, useRef } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import 'dayjs/locale/pt-br';

import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';

import List from './components/List/List';
import Task from './components/Task/Task';
import NoTask from './components/NoTasks/NoTasks';

function App() {

  const input = useRef(null)

  const [date, setDate] = useState(dayjs().locale("pt-br"))

  const [quantity, setQuantity] = useState(0)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false);

  const [lists, setLists] = useState({
    ["Casa"]: [],
    ["Estudo"]: [],
    ["Importante"]: []
  })

  const [selectedList, setSelectedList] = useState(Object.keys(lists)[0])
  const handleSelect = (value) => {
    setSelectedList(value)
  }

  const [listCreateError, setListCreateError] = useState(false)

  const [showInput, setShowInput] = useState(false)
  const handleInput = (state) => {
    setShowInput(state)
  }

  function checkIfSubmitedList(e) {
    if (e.key === "Enter") {
      if (Object.keys(lists).find(item => item === e.target.value) === undefined) {
        if (e.target.value !== "") {
          lists[e.target.value] = []
          setLists({ ...lists })
        }
        
        setShowInput(false)

      } else {
        setListCreateError(true)
      }
    }
  }

  function checkIfSubmitedTask(e) {
    if (e.key === "Enter") {
      const newList = {...lists}

      setQuantity(quantity + 1)

      newList[selectedList].push({
        id: quantity,
        task: e.target.value,
        date: date,
        isDone: false
      })

      setLists(newList)

      e.target.value = ""
    }
  }

  const deleteList = () => {
    handleClose()
    delete lists[selectedList]
    setSelectedList(Object.keys(lists)[0])
  }

  useEffect(() => {
    setSelectedList(Object.keys(lists)[0])
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

  function changeTaskState(task, value) {
    const newList = {...lists}
    const index = newList[selectedList].findIndex(item => item.id === task);

    if (index !== -1) newList[selectedList][index].isDone = value

    setLists(newList);
  }

  function deleteTask(task) {
    const newList = { ...lists };

    newList[selectedList] = newList[selectedList].filter(item => item.id !== task);

    setLists(newList);
  }

  function filterByDate() {
    console.log(new Date(date.$d).toDateString())
    const newList = { ...lists };

    newList[selectedList] = newList[selectedList].filter(item => {
      const itemDate = new Date(item.date).toDateString();
      const filterDate = new Date(date.$d).toDateString();
      return itemDate === filterDate;
    });

    return newList;
  }

  console.log(lists)

  useEffect(() => {
    filterByDate()
  }, [date])

  return (
    <>
      <Styled.ListContainer>
        <div className='title'>
          <svg fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/></svg>
          <h1> TodoList </h1>
        </div>

        <h4> Minhas listas </h4>
        { Object.keys(lists).map((item, key) => (
          <List 
            key={key}
            name={item}
            isSelected={selectedList === item}
            selection={handleSelect}
            remove={handleOpen}
          />
        )) }

        { showInput &&
          <input ref={input} placeholder='Nome da lista' onKeyDown={checkIfSubmitedList} onBlur={() => handleInput(false)}/>
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
              <h1> { months[date.$M][0] + months[date.$M][1] + months[date.$M][2] } </h1>
              <h1> { date.$D } </h1>
          </div>

          <div>
            <h1> { new Date().getHours() < 12 ? "Bom dia" : new Date().getHours() > 17 ? "Boa noite" : "Boa tarde" } </h1>
            <h2> Quais são os seus planos para hoje? </h2>
          </div>
        </Styled.Title>

        <input placeholder='Adicionar tarefa' onKeyDown={checkIfSubmitedTask}/>
      
        { lists[selectedList] === undefined || lists[selectedList].length === 0 ?
          <NoTask/>
          :
          lists[selectedList].map((item, key) => (
            <Task
              key={key}
              id={item.id}
              description={item.task}
              date={item.date}one
              isDone={item.isDone}
              taskState={changeTaskState}
              remove={deleteTask}
            />
          )) 
        }
      </Styled.ListItemsContainer>
      



      <Styled.CalendarContainer>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <DateCalendar value={date} onChange={(newValue) => setDate(newValue)}/>
        </LocalizationProvider>
      </Styled.CalendarContainer>
    </>
  );
}

export default App;
