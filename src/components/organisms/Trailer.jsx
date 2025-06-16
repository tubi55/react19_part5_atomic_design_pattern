import Modal from "../atoms/Modal";

export default function Trailer({ open, setOpen, vid }) {
  return (
    <>
      <Modal open={open} setOpen={setOpen} className="size-7/10 max-md:size-full max-md:px-[10vw] py-[10vh]">
        <iframe
          src={`https://www.youtube.com/embed/${vid?.key}`}
          title="YouTube video player"
          allowFullScreen
          className="size-full object-cover opacity-50 transition-opacity duration-700 hover:opacity-100"
        ></iframe>
      </Modal>
    </>
  );
}
