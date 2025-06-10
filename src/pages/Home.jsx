import { useState } from "react";
import Input from "../components/atoms/Input";

export default function Home() {
  const [comment, setComment] = useState("");

  return (
    <section className="p-20 flex-wrap gap-5">
      {/* 비제어 컴포넌트 */}
      <Input placeholder="이름을 입력하세요" name="username" />

      {/* 라디오, 체크박스 */}
      <Input type="radio" name="gender" className="size-5" />
      <Input type="checkbox" name="interest" className="size-5" />
      <br />

      {/* 제어 컴포넌트 */}
      <Input
        tag="textarea"
        name="comment"
        rows={10}
        placeholder="남기는 말을 입력하세요."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
    </section>
  );
}
