const columns = [
  { title: "서비스", links: ["수치 체커", "음식 가이드", "먹어도 돼?"] },
  { title: "콘텐츠", links: ["콜레스테롤 인사이트 (준비중)", "FAQ"] },
  { title: "두잉두잇", links: ["인스타그램", "브랜드 소개"] },
  { title: "안내", links: ["이용약관", "개인정보처리방침"] },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-on-dark-soft">
      <div className="mx-auto max-w-[1200px] px-lg py-16">
        <div className="grid grid-cols-1 gap-xl sm:grid-cols-2 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-sm font-text text-caption-strong text-on-dark">
                {col.title}
              </h4>
              <ul className="space-y-xs">
                {col.links.map((link) => (
                  <li key={link} className="font-text text-caption">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-xl border-t border-white/10 pt-lg font-text text-fine-print text-on-dark-soft">
          © {new Date().getFullYear()} 두잉두잇. 본 콘텐츠는 의학적 진단·치료를 대체하지 않습니다.
        </p>
      </div>
    </footer>
  );
}
