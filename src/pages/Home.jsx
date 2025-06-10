import Bg from "../components/atoms/Bg";
import Modal from "../components/atoms/Modal";
import Text from "../components/atoms/Text";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Bg src="https://image.tmdb.org/t/p/w1280/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg" />
      <Modal open={isOpen} setOpen={setIsOpen}>
        <Text>이곳에 원하는 내용을 넣을 수 있어요!</Text>
      </Modal>
    </>
  );
}
