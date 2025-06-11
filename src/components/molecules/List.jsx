import Text from "../atoms/Text";

export default function List({ data, className, children }) {
  return (
    <ul>
      {data && data.length > 0 ? (
        data.map((el, idx) => (
          <li key={idx} className={className}>
            {/* children이 함수 형태일 때만 실행되도록 처리 */}
            {typeof children === "function"
              ? children(el, idx)
              : "JSX반환 함수가 들어와야 합니다."}
          </li>
        ))
      ) : (
        <li className={className}>
          <Text tag="h2">등록된 데이터가 없습니다.</Text>
        </li>
      )}
    </ul>
  );
}
