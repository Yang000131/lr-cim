# MES (Manufacturing Execution System) {#mes}

## 核心功能 {#core-function}

### 🌐 工厂建模 (Fab Modelling) {#fab-modelling}

| 英文                               | 中文翻译                        | 说明                                     |
| ---------------------------------- | ------------------------------- | ---------------------------------------- |
| Process Modelling                  | 工艺建模                        | 定义每道工艺步骤的参数与流程             |
| Product Modelling                  | 产品建模                        | 描述产品的结构、工艺路线等               |
| EDC Modelling                      | 设备控制数据建模                | 建模设备的控制逻辑与数据接口             |
| NPW Modelling (Pre-In/Used-Recyle) | 非生产晶圆建模（预用/已用回收） | 管理测试片、Dummy Wafer 等非量产晶圆     |
| EQP Modelling                      | 设备建模                        | 包括设备能力、资源、LoadPort、运输能力等 |
| Inventory/Bank                     | 库存/线边仓                     | 晶圆库存管理，如 WIP 库、材料库          |
| Access Control (Function/Data)     | 访问控制（功能/数据）           | 控制用户对系统功能或数据的权限           |
| Pre/Post Dependency                | 前后依赖关系                    | 工艺步骤之间的顺序约束                   |
| Q-Time                             | 排队时间                        | 晶圆在等待处理时的时间窗口               |
| Logical Recipe / Recipe            | 逻辑配方 / 实际配方             | 工艺执行的参数集合                       |
| Reticle Set / Reticle              | 光罩组 / 光罩                   | 光刻用掩膜版管理                         |
| FAB                                | 晶圆厂                          | 工厂层级                                 |
| Area                               | 区域                            | 工厂内的分区（如前段、后段）             |
| User                               | 用户                            | 操作人员或系统账户                       |

### 🔧 设备管理 (EQP Mgt) {#eqp-mgt}

| 英文                | 中文翻译          | 说明                               |
| ------------------- | ----------------- | ---------------------------------- |
| EQP Query/History   | 设备查询/历史记录 | 查询设备运行状态及历史日志         |
| State Transition    | 状态转换          | 设备从待机 → 运行 → 维护等状态变化 |
| Chamber/Port/Buffer | 腔体/端口/缓冲区  | 设备内部组件状态管理               |
| NonLot EDC          | 非批次 EDC        | 单独设备控制指令，不绑定晶圆批次   |

### 📦 晶圆管理 (Durable Mgt) {#durable-mgt}

| 英文                       | 中文翻译                                                | 说明                           |
| -------------------------- | ------------------------------------------------------- | ------------------------------ |
| Carrier Mgmt               | 载具管理                                                | 如 FOUP、SMIF 盒等晶圆容器管理 |
| Carrier State Control      | 载具状态控制                                            | 控制载具是否可用、清洁、锁定等 |
| Reticle Mgmt               | 光罩管理                                                | 光罩的生命周期管理             |
| Reticle Pod                | 光罩盒                                                  | 存储和运输光罩的容器           |
| Probe Card                 | 探针卡                                                  | 电性测试用探针卡管理           |
| Durable Clean & Inspection | 耐用品清洗与检测                                        | 清洗与质量检查                 |
| ARHS                       | 自动化光罩处理系统（Automated Reticle Handling System） | 光罩自动搬运系统               |

### 🎯 批次管理 (Lot Mgt) {#lot-mgt}

| 英文                | 中文翻译      | 说明                         |
| ------------------- | ------------- | ---------------------------- |
| Lot Query/History   | 批次查询/历史 | 查看批次状态、路径、操作记录 |
| Hold/Release        | 暂停/释放     | 暂停某批次处理或重新启用     |
| Split/Merge         | 分割/合并     | 将一个批次拆分或多个合并     |
| Reassign/Reposition | 重分配/重定位 | 更改批次的目标工序或位置     |
| Scrap               | 报废          | 标记为不可用批次             |
| Terminate           | 终止          | 结束批次流程                 |
| Inventory/Bank      | 库存/银行     | 批次存储与调拨               |
| Lot Attribute       | 批次属性      | 批次的自定义标签或参数       |
| Branch              | 分支          | 支持多工艺路径选择           |
| Rework              | 返工          | 重新进入某道工序             |
| Fetch Step          | 获取步骤      | 获取当前应执行的工艺步骤     |

### 🔄 在制品管理（WIP Mgt）{#wip-mgt}

| 英文                    | 中文翻译              | 说明                     |
| ----------------------- | --------------------- | ------------------------ |
| Source Material Control | 原材料控制            | 控制原材料入库与使用     |
| Lot Create              | 创建批次              | 新建晶圆批次             |
| Wafer Start             | 晶圆启动              | 开始某道工艺             |
| Pre/Post                | 前/后处理             | 工艺前后的准备与清理     |
| Reservation             | 预留                  | 预留设备或资源给特定批次 |
| MoveIn                  | 进入                  | 晶圆进入某区域或设备     |
| MoveOut                 | 出库                  | 晶圆离开当前区域         |
| EDC                     | 设备控制数据          | 传输到设备的控制指令     |
| OQA/Packaging           | 出货质检/包装         | 最终检验与出货准备       |
| WAT                     | Wafer Acceptance Test | 晶圆接收测试             |
| Ship                    | 发运                  | 晶圆出厂                 |

### ⚙️ 工艺控制 (Process Control) {#process-control}

| 英文              | 中文翻译     | 说明                       |
| ----------------- | ------------ | -------------------------- |
| Contamination     | 污染控制     | 监控与防止污染             |
| Q-Time            | 排队时间控制 | 控制晶圆在队列中的等待时间 |
| Constraints       | 约束条件     | 工艺限制（如温度、压力）   |
| Wafer Selection   | 晶圆选择     | 选择符合要求的晶圆进行加工 |
| Sampling          | 抽样         | 质量抽检策略               |
| Recipe Resolution | 配方解析     | 解析并下发工艺配方         |
| EDC Resolution    | EDC 解析     | 解析设备控制指令           |
| Reticle Selection | 光罩选择     | 选择匹配的光罩             |
| Batch Ops         | 批量操作     | 多晶圆同时处理             |

### 🛠️ 工程支持 (Engineering Support) {#engineering-support}

| 英文    | 中文翻译                      | 说明                       |
| ------- | ----------------------------- | -------------------------- |
| RRC     | Run-to-Run Control            | 运行间控制，用于稳定性调节 |
| SRC     | Statistical Run Control       | 统计运行控制               |
| Pilot   | 试点运行                      | 小批量验证新工艺           |
| Mix Run | 混合运行                      | 同时运行多种产品           |
| SPC     | 统计过程控制                  | 实时监控工艺波动           |
| OCAP    | Out-of-Control Action Plan    | 异常响应计划               |
| PMS     | Performance Monitoring System | 性能监控系统               |

### 🧪 非生产晶圆管理 (NPW Mgt) {#npw-mgt}

| 英文            | 中文翻译           | 说明                   |
| --------------- | ------------------ | ---------------------- |
| NPW Life Cycle  | 非生产晶圆生命周期 | 从创建到报废全过程管理 |
| EQP Monitor     | 设备监控           | 监控设备运行状态       |
| Process Monitor | 工艺监控           | 监控工艺参数           |
| Season          | 适应性调整         | 使设备适应不同工艺需求 |
| Dummy           | 伪晶圆             | 用于设备校准的模拟晶圆 |

### 🧰 模块/工具 (Module/Tool)

| 英文                  | 中文翻译            | 说明                             |
| --------------------- | ------------------- | -------------------------------- |
| Sorter                | 分选机              | 晶圆分拣设备                     |
| Fixed Buffer          | 固定缓冲区          | 设备前的暂存区                   |
| Fixed Buffer with NTB | 带 NTB 的固定缓冲区 | NTB：No Touch Buffer，无接触缓冲 |
| Litho                 | 光刻                | 光刻工艺模块                     |
| Furnace               | 炉管                | 热处理设备                       |
| CMP                   | 化学机械抛光        | 平面化工艺                       |
| ETCH/WET              | 刻蚀/湿法           | 干法/湿法刻蚀                    |
| Laser Mark            | 激光打标            | 在晶圆上标记信息                 |
| Backside Clean        | 背面清洗            | 晶圆背面清洁                     |
| N2Purge               | 氮气吹扫            | 除氧防氧化                       |
| Bond/Debond           | 键合/解键合         | 芯片封装环节                     |
| OQA/Packing           | 出货质检/包装       | 最终检测与封装                   |

### 🌍 多厂区（Multiple FAB）

| 英文          | 中文翻译   | 说明                 |
| ------------- | ---------- | -------------------- |
| Central Spec  | 中央规格   | 统一工艺规范         |
| XFAB transfer | 跨厂区转移 | 晶圆在不同工厂间流转 |
