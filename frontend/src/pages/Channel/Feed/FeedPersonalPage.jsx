import { useState } from "react";
import ContentDrawer from "../../../components/Channel/feed/ContentDrawer";
import ContentItemGrid from "../../../components/Channel/feed/ContentItemGrid";
import CreateContentDrawer from "../../../components/Channel/feed/CreateContentDrawer";
import FeedHeader from "../../../components/Channel/feed/FeedHeader";
import { get_feedData } from "../../../api/dummy";

const contents = get_feedData;
// 임시 더미 데이터, api연결되면 바꿀것

function FeedPersonalPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

  const handleSelectContent = (content) => {
    setSelectedContent(content);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedContent(null);
  };
  return (
    <>
      <div className="flex h-full">
        <div className="flex flex-col flex-1">
          <FeedHeader openCreateDrawer={() => setIsCreateDrawerOpen(true)} />
          <ContentItemGrid
            contents={contents}
            onSelectContent={handleSelectContent}
          />
          <ContentDrawer
            isOpen={isDrawerOpen}
            onClose={handleCloseDrawer}
            content={selectedContent}
          />
          <CreateContentDrawer
            onClose={() => setIsCreateDrawerOpen(false)}
            isOpen={isCreateDrawerOpen}
          />
        </div>
      </div>
    </>
  );
}

export default FeedPersonalPage;
