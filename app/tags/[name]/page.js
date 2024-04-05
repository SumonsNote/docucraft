import { getDocumentsByTag } from "@/app/utils/doc-util";
import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";

const TagsPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default TagsPage;
