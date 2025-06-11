import { useActionState, useOptimistic } from "react";
import Input from "../components/atoms/Input";
import SubmitButton from "../components/molecules/SubmitButton";
import List from "../components/molecules/List";

// 서버액션
async function savePost(formData) {
  "use server";

  const serverPost = {
    id: Date.now(), // 실제 서버 id (예시)
    content: formData.get("post") + " (from server)",
  };

  await new Promise((res) => setTimeout(res, 2000)); // 가상 지연
  return serverPost;
}

export default function Home() {
  //confirmedPosts: 서버액션을 통해 최종 갱신될 상태값
  //formAction: 서버 액션 트리거
  const [confirmedPosts, formAction] = useActionState(async (prev, formData) => {
    const serverPost = await savePost(formData);
    return [serverPost, ...prev];
  }, []);

  //optPosts: 낙관적 업데이트용 상태값
  //addOptPosts: 낙관적 업데이트 트리거
  const [optPosts, addOptPosts] = useOptimistic(confirmedPosts, (prev, newPost) => [newPost, ...prev]);

  //낙관적 업데이트가 포함된 서버액션 트리거
  //addOptPosts, formAction을 같이 호출하는 wrapping handler
  const optFormAction = (formData) => {
    //낙관적으로 출력할 데이터
    const newPost = {
      id: Date.now(),
      content: formData.get("post") + " (optimistic)",
    };

    //낙관적 업데이트 실행
    addOptPosts(newPost);

    //서버 액션 트리거
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
