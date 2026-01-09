import React, { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Target,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const NovDecReport = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const summary = {
    nov: { total: 557, cost: 35505138, online: 12105138, offline: 23400000, target: 800 },
    dec: { total: 566, cost: 34817864, online: 11417864, offline: 23400000, target: 800 },
  };

  const pathData = [
    { path: '온라인', nov: 232, dec: 263 },
    { path: '고객소개', nov: 121, dec: 138 },
    { path: '일반소개', nov: 19, dec: 11 },
    { path: '직원소개', nov: 29, dec: 24 },
    { path: '소문', nov: 68, dec: 71 },
    { path: '오프라인', nov: 79, dec: 53 },
    { path: '기업제휴', nov: 9, dec: 6 },
  ];

  const channelData = [
    { name: '네이버 검색광고', nov: 4621045, dec: 3942609, novImp: 240031, decImp: 236000, novClick: 2078, decClick: 2230 },
    { name: '페이스북 광고', nov: 2878198, dec: 3355255, novImp: 2965859, decImp: 3728965, novClick: 6117, decClick: 7452 },
    { name: 'GDN', nov: 304230, dec: 304930, novImp: 134336, decImp: 190921, novClick: 5289, decClick: 4974 },
    { name: '네이버 블로그', nov: 4450000, dec: 4120000, novImp: 0, decImp: 0, novClick: 0, decClick: 0 },
    { name: '오프라인광고', nov: 23400000, dec: 23400000, novImp: 0, decImp: 0, novClick: 0, decClick: 0 },
  ];

  const ccData = [
    { cc: '통증', nov: 148, dec: 134 },
    { cc: '기타', nov: 107, dec: 96 },
    { cc: '검진', nov: 77, dec: 107 },
    { cc: '사랑니', nov: 59, dec: 46 },
    { cc: '임플란트', nov: 36, dec: 45 },
    { cc: '스케일링', nov: 37, dec: 65 },
    { cc: '교정', nov: 42, dec: 22 },
    { cc: '턱관절', nov: 30, dec: 21 },
  ];

  const websiteData = {
    nov: { total: 6781, new: 5355, pageview: 11612 },
    dec: { total: 7877, new: 5591, pageview: 12895 },
  };

  const diff = summary.dec.total - summary.nov.total;
  const diffPercent = ((diff / summary.nov.total) * 100).toFixed(1);
  const novCpp = (summary.nov.cost / summary.nov.total / 10000).toFixed(1);
  const decCpp = (summary.dec.cost / summary.dec.total / 10000).toFixed(1);
  const targetAchieve = ((summary.dec.total / summary.dec.target) * 100).toFixed(1);

  const getChange = (dec, nov) => {
    const d = dec - nov;
    const p = nov > 0 ? ((d / nov) * 100).toFixed(1) : 0;
    return { diff: d, percent: p, isPositive: d > 0 };
  };

  const PageFrame = ({ children }) => (
    <div className="min-h-screen w-screen bg-slate-100 flex items-center justify-center p-6">
      <div
        className="relative w-[min(1920px,100vw)] h-[min(1080px,100vh)] rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.25)] border border-white/60"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(148, 163, 184, 0.2), transparent 50%), radial-gradient(circle at 80% 10%, rgba(59, 130, 246, 0.15), transparent 55%), #f8fafc',
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
        <div className="relative h-full w-full p-10">{children}</div>
      </div>
    </div>
  );

  const PageHeader = ({ gradient, title, page }) => (
    <div
      className={`rounded-3xl shadow-lg px-10 py-7 text-white flex items-center justify-between ${gradient}`}
    >
      <div>
        <h1 className="text-4xl font-bold tracking-tight mb-2">{title}</h1>
        <p className="text-white/80 text-lg">2025년 12월 1일 - 12월 31일 | 11월 대비 분석</p>
      </div>
      <div className="text-right">
        <div className="text-xs uppercase tracking-[0.35em] text-white/70">Page</div>
        <div className="text-3xl font-bold">{page} / 3</div>
      </div>
    </div>
  );

  // 페이지 1: 전체 서머리
  const Page1 = () => (
    <PageFrame>
      <div className="h-full flex flex-col gap-6">
        <PageHeader
          gradient="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600"
          title="12월 마케팅 성과 보고서"
          page={1}
        />

        {diff > 0 && (
          <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp className="text-emerald-600" size={26} />
              </div>
              <div>
                <div className="font-bold text-emerald-900 text-lg">전월 대비 소폭 회복</div>
                <div className="text-sm text-emerald-700">
                  11월 대비 {diff}명 증가 (+{diffPercent}%), 온라인 채널 성장세
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-4 gap-5">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-sm font-semibold">총 신환수</span>
              <Users className={diff >= 0 ? 'text-emerald-600' : 'text-rose-600'} size={26} />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">{summary.dec.total}명</div>
            <div className="flex items-center gap-2">
              {diff >= 0 ? (
                <TrendingUp className="text-emerald-600" size={18} />
              ) : (
                <TrendingDown className="text-rose-600" size={18} />
              )}
              <span
                className={`text-sm font-semibold ${diff >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}
              >
                11월 대비 {diff > 0 ? '+' : ''}
                {diff}명 ({diffPercent}%)
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-sm font-semibold">총 마케팅 비용</span>
              <DollarSign className="text-blue-600" size={26} />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">3,482만원</div>
            <div className="text-sm text-slate-500">온라인 1,142만 (32.8%)</div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-sm font-semibold">신환당 비용</span>
              <Target className="text-emerald-600" size={26} />
            </div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">{decCpp}만원</div>
            <div className="flex items-center gap-2">
              <TrendingDown className="text-emerald-600" size={18} />
              <span className="text-sm text-emerald-600 font-semibold">
                11월 대비 -{(novCpp - decCpp).toFixed(1)}만원
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-500 text-sm font-semibold">목표 달성률</span>
              <Target className="text-violet-600" size={26} />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">{targetAchieve}%</div>
            <div className="text-sm text-slate-500">목표 800명 중 566명</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 flex-1">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">주요 증가 경로</h2>
            <div className="space-y-3">
              {pathData
                .map((item) => ({ ...item, change: item.dec - item.nov }))
                .sort((a, b) => b.change - a.change)
                .slice(0, 3)
                .map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl">
                    <div>
                      <div className="font-bold text-slate-900">{item.path}</div>
                      <div className="text-sm text-slate-500">
                        {item.nov}명 → {item.dec}명
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">+{item.change}</div>
                      <div className="text-xs text-emerald-600">
                        (+{((item.change / item.nov) * 100).toFixed(1)}%)
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">주요 감소 경로</h2>
            <div className="space-y-3">
              {pathData
                .map((item) => ({ ...item, change: item.dec - item.nov }))
                .sort((a, b) => a.change - b.change)
                .slice(0, 3)
                .map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-rose-50 rounded-2xl">
                    <div>
                      <div className="font-bold text-slate-900">{item.path}</div>
                      <div className="text-sm text-slate-500">
                        {item.nov}명 → {item.dec}명
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-rose-600">{item.change}</div>
                      <div className="text-xs text-rose-600">
                        ({((item.change / item.nov) * 100).toFixed(1)}%)
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 border border-blue-100">
          <div className="font-bold text-blue-900 mb-3">📊 주요 성과</div>
          <div className="grid grid-cols-3 gap-4 text-sm text-slate-600">
            <div>
              <span className="text-blue-700">• 온라인 채널: </span>
              <span className="font-bold text-slate-900">232명 → 263명 (+13.4%)</span>
            </div>
            <div>
              <span className="text-blue-700">• 고객소개: </span>
              <span className="font-bold text-slate-900">121명 → 138명 (+14.0%)</span>
            </div>
            <div>
              <span className="text-blue-700">• 신환당 비용: </span>
              <span className="font-bold text-emerald-700">6.4만 → 6.2만원 (-3.4%)</span>
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );

  // 페이지 2: 내원경로별 비교
  const Page2 = () => (
    <PageFrame>
      <div className="h-full flex flex-col gap-6">
        <PageHeader
          gradient="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600"
          title="내원경로별 신환 비교"
          page={2}
        />

        <div className="flex-1 bg-white rounded-3xl shadow-sm p-8 border border-slate-100">
          <div className="space-y-5">
            {pathData.map((item, idx) => {
              const change = getChange(item.dec, item.nov);
              return (
                <div key={idx} className="border-b border-slate-100 pb-5 last:border-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl ${
                          change.isPositive ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                      >
                        {item.dec}
                      </div>
                      <div>
                        <div className="text-xl font-bold text-slate-900">{item.path}</div>
                        <div className="text-sm text-slate-500">
                          12월: {((item.dec / summary.dec.total) * 100).toFixed(1)}% | 11월:{' '}
                          {((item.nov / summary.nov.total) * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>

                    <div
                      className={`px-6 py-3 rounded-2xl font-bold text-lg ${
                        change.isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                      }`}
                    >
                      {change.diff > 0 ? '+' : ''}
                      {change.diff}명 ({change.diff > 0 ? '+' : ''}
                      {change.percent}%)
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs text-slate-500 mb-2">11월</div>
                      <div className="h-9 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-slate-400 to-slate-500 flex items-center justify-center text-white text-sm font-bold"
                          style={{ width: `${Math.max((item.nov / 263) * 100, 10)}%` }}
                        >
                          {item.nov}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-2">12월</div>
                      <div className="h-9 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full flex items-center justify-center text-white text-sm font-bold ${
                            change.isPositive
                              ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                              : 'bg-gradient-to-r from-rose-500 to-rose-600'
                          }`}
                          style={{ width: `${Math.max((item.dec / 263) * 100, 10)}%` }}
                        >
                          {item.dec}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageFrame>
  );

  // 페이지 3: CC별 비교
  const Page3 = () => (
    <PageFrame>
      <div className="h-full flex flex-col gap-6">
        <PageHeader
          gradient="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600"
          title="주 호소 증상(CC)별 신환 비교"
          page={3}
        />

        <div className="flex-1 grid grid-cols-2 gap-6">
          {ccData.map((item, idx) => {
            const change = getChange(item.dec, item.nov);
            return (
              <div key={idx} className="bg-white rounded-3xl shadow-sm p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{item.cc}</div>
                    <div className="text-sm text-slate-500">
                      12월: {((item.dec / summary.dec.total) * 100).toFixed(1)}% | 11월:{' '}
                      {((item.nov / summary.nov.total) * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div
                    className={`px-4 py-2 rounded-xl font-bold ${
                      change.isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                    }`}
                  >
                    {change.diff > 0 ? '+' : ''}
                    {change.diff}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-16 text-sm text-slate-500">11월</div>
                    <div className="flex-1 h-8 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-slate-400 to-slate-500 flex items-center justify-center text-white font-bold"
                        style={{ width: `${Math.max((item.nov / 148) * 100, 15)}%` }}
                      >
                        {item.nov}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-16 text-sm text-slate-500">12월</div>
                    <div className="flex-1 h-8 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full flex items-center justify-center text-white font-bold ${
                          change.isPositive
                            ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                            : 'bg-gradient-to-r from-rose-500 to-rose-600'
                        }`}
                        style={{ width: `${Math.max((item.dec / 148) * 100, 15)}%` }}
                      >
                        {item.dec}
                      </div>
                    </div>
                  </div>
                </div>

                {change.percent !== '0.0' && (
                  <div className="mt-3 text-right">
                    <span
                      className={`text-sm font-semibold ${
                        change.isPositive ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      {change.isPositive ? '↑' : '↓'} {Math.abs(change.percent)}%
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-6 border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-3">💡 CC별 주요 변화</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-emerald-50 p-4 rounded-2xl">
              <div className="font-bold text-emerald-800 mb-1">스케일링 급증</div>
              <div className="text-emerald-700">37명 → 65명 (+75.7%)</div>
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl">
              <div className="font-bold text-emerald-800 mb-1">검진 증가</div>
              <div className="text-emerald-700">77명 → 107명 (+39.0%)</div>
            </div>
            <div className="bg-rose-50 p-4 rounded-2xl">
              <div className="font-bold text-rose-800 mb-1">교정 감소</div>
              <div className="text-rose-700">42명 → 22명 (-47.6%)</div>
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );

  const pages = [<Page1 key="page-1" />, <Page2 key="page-2" />, <Page3 key="page-3" />];

  return (
    <div className="relative">
      {pages[currentPage]}

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/90 backdrop-blur-lg rounded-full shadow-2xl px-6 py-3 border border-white">
        <button
          onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className={`p-2 rounded-full transition ${
            currentPage === 0 ? 'text-slate-300' : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex items-center gap-2">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-3 rounded-full transition-all ${
                currentPage === idx ? 'bg-blue-600 w-8' : 'bg-slate-300 w-3'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentPage(Math.min(pages.length - 1, currentPage + 1))}
          disabled={currentPage === pages.length - 1}
          className={`p-2 rounded-full transition ${
            currentPage === pages.length - 1 ? 'text-slate-300' : 'text-blue-600 hover:bg-blue-50'
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default NovDecReport;
