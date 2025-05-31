import BlogCategories from './BlogCategories';
import BlogTags from './BlogTags';
import NewsCategories from './NewsCategories';
import NewsTags from './NewsTags';

export default function AdminMetaManage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold mb-8">Manage Categories & Tags</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Blog Categories</h2>
        <BlogCategories />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Blog Tags</h2>
        <BlogTags />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">News Categories</h2>
        <NewsCategories />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">News Tags</h2>
        <NewsTags />
      </section>
    </div>
  );
}
