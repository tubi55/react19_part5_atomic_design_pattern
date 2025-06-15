import { useActionState, useOptimistic } from "react";
import Input from "../components/atoms/Input";
import SubmitButton from "../components/molecules/SubmitButton";
import List from "../components/molecules/List";

// 서버액션 (실제 서버단에서 데이터 처리)
async function savePost(formData) {
  const serverPost = {
    id: Date.now(), // 실제 서버 id (예시)
    content: formData.get("post") + " (from server)",
  };

  await new Promise((res) => setTimeout(res, 2000)); // 가상 지연
  return serverPost;
}

export default function Home() {
  //서버액션 실행후 반환된 값으로 최종 상태 갱신
  const [confirmedPosts, formAction] = useActionState(async (prev, formData) => {
    const serverPost = await savePost(formData);
    return [serverPost, ...prev];
  }, []);

  //서버 액션 응답 기다리기 전 먼저 화면에 출력할 낙관적 임시 상태 생성
  const [optPosts, addOptPosts] = useOptimistic(confirmedPosts, (prev, newPost) => [newPost, ...prev]);

  //기존 formAction(서버액션 트리거)에 낙관적 업데이트 기능이 추가된 트리거 함수
  const optFormAction = (formData) => {
    if (formData.get("post").trim() === "") return alert("메세지를 입력하세요.");

    const newPost = {
      id: Date.now(),
      content: formData.get("post") + " (optimistic)",
    };

    addOptPosts(newPost);
    formAction(formData);
  };

  return (
    <section className="p-20">
      <form action={optFormAction}>
        <Input name="post" placeholder="텍스트를 입력하세요." />
        <SubmitButton />
      </form>

      <List data={optPosts}>{(el) => <h2>{el.content}</h2>}</List>
    </section>
  );
}
