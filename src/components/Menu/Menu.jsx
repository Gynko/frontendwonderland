import ButtonMenu from "../ButtonMenu/ButtonMenu";
import ButtonsContainer from "../ButtonsContainer/ButtonsContainer";

function Menu({ margintop, columns, options, onClick, theme }) {
  return (
    <ButtonsContainer margintop={margintop} columns={columns}>
      {options.map((item, index) => {
        return (
          <ButtonMenu
            key={`${item.value}${theme}${item.name}`}
            onClick={onClick}
            label={item.label}
            value={item.value}
            name={item.name}
            theme={item.theme}
            active={item.active === item.value}
            itemsNumber={index}
          />
        );
      })}
    </ButtonsContainer>
  );
}

export default Menu;
