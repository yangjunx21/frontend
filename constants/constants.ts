export const ROLES = ["超级管理员", "管理员", "需求方", "标注方", "中介"]
export const ROLE_PAGES = ["super_manager", "manager", "demander", "worker","intermediary"]
export const CATEGORY = ["文本任务", "图像任务", "音频任务", "视频任务", "图像目标检测", "骨骼打点","实体关系三元组","审核任务"]
export const STATUS = ["未确认", "招募中", "标注中", "已完成","僵化中","审核中"]

export const PW_LIM = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&+=()\-_[\]{}\\|;:'",<.>/?]).{6,20}$/