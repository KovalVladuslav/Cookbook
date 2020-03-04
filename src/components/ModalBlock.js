import React from 'react';
import '../index.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { FormModalEdit } from './FormModalEdit';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));


export const ModalBlock = ({
  name,
  time,
  newIngridients,
  recipe,
  dish,
  dishList,
  setNewDish,
  handleClose,
  open,
  changeName,
  changeTime,
  changeIngredients,
  changeRecipe}) => {
  const classes = useStyles();

  const getCurrentData = (date) => {
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
  }

  const addDish = () => {
    const newDish = {
      title: name,
      date: getCurrentData(new Date()),
      timeCooking: time,
      ingredients: newIngridients,
      recipe,
      img: 'https://i.obozrevatel.com/food/recipemain/2019/3/4/3c4d2ecd-df43-41d2-a17a-71914ead0e50w1023r1s.webp?size=300x200'
    }
    dish.unshift(newDish)
    setNewDish(dishList)
    handleClose()
  }

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
    <FormModalEdit
      newIngridients={newIngridients}
      addDish={addDish}
      changeName={changeName}
      changeTime={changeTime}
      changeIngredients={changeIngredients}
      changeRecipe={changeRecipe}
      recipe={recipe}
      open={open}
      name={name}
      time={time}
    />
    </Modal>
  )
}
