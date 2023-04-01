import { RiMenuFoldFill, RiCloseLine } from "react-icons/ri";

const BtnMovil = ({ toggleMenu, menu }) => {

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="block lg:hidden fixed bottom-4 right-4 bg-primary
      p-4 text-white rounded-full text-2xl z-10"
      >
        {menu ? <RiCloseLine /> : <RiMenuFoldFill />}
      </button>
    </div>
  );
};

export default BtnMovil;


