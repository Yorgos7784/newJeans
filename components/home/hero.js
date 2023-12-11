import Link from "next/link";
import Animation from "../animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          테드창 포트폴리오 페이지이삼
        </h1>
        <p className="mb-8 leading-relaxed">
          농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로
          발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여
          인정된다. 대통령은 국가의 독립·영토의 보전·국가의 계속성과 헌법을
          수호할 책무를 진다. 언론·출판은 타인의 명예나 권리 또는 공중도덕이나
          사회윤리를 침해하여서는 아니된다. 언론·출판이 타인의 명예나 권리를
          침해한 때에는 피해자는 이에 대한 피해의 배상을 청구할 수 있다.
          국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다. 국채를
          모집하거나 예산외에 국가의 부담이 될 계약을 체결하려 할 때에는 정부는
          미리 국회의 의결을 얻어야 한다. 새로운 회계연도가 개시될 때까지
          예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지
          다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
