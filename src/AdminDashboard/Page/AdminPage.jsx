// AdminPage.jsx
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CoursesTable from '../components/CoursesTable';

function AdminPage() {
  return (
    // استخدم min-h-dvh (حديث) مع min-h-screen كـ fallback ضمنياً من المتصفح
    <div className="min-h-dvh bg-gray-50 flex flex-col lg:flex-row">
      {/* Sidebar: عمودي (فوق) على الشاشات الصغيرة والآيباد؛ جانبي من lg وطالع */}
      <aside className="w-full lg:w-72 xl:w-80 shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white">
        <Sidebar />
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header ثابت مع ظل خفيف */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200">
          <Header />
        </div>

        {/* غلاف الجدول: تمـرير أفقي أنظف + حواف داخلية حسب المقاس */}
        <div className="flex-1 overflow-x-auto">
          {/* حواف أفقية صغيرة على الموبايل/آيباد، أكبر على الديسكتوب */}
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            {/* ملاحظة: CoursesTable نفسه فيه overflow-x-auto/min-w حسب ما ظبطناه قبل كده */}
            <CoursesTable />
          </div>
        </div>
      </main>

      {/* مسافة آمنة لأسفل الأجهزة ذات الحافة (اختياري بصري) */}
      <div className="pb-[env(safe-area-inset-bottom)]" />
    </div>
  );
}

export default AdminPage;
