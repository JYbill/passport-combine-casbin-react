/**
 * @file: NotFound.tsx
 * @author: xiaoqinvar
 * @desc：404页面
 * @date: 2022-08-17 15:53:28
 */
import { Empty } from "@douyinfe/semi-ui";
import {
  IllustrationConstruction,
  IllustrationConstructionDark,
} from "@douyinfe/semi-illustrations";

export default function NotFound() {
  return (
    <div className="NotFound">
      <Empty
        image={<IllustrationConstruction style={{ width: 150, height: 150 }} />}
        darkModeImage={
          <IllustrationConstructionDark style={{ width: 150, height: 150 }} />
        }
        title={"功能建设中"}
        description="当前功能暂未开放，敬请期待。"
      />
    </div>
  );
}
