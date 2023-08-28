import TaskPresent from "~/components/TaskPresent.vue";
import { describe, expect, it, test } from "vitest";
// https://test-utils.vuejs.org/
import { mount } from '@vue/test-utils'
import { Task, defaultTask } from "~/utils/types"

describe('Task Present', () => {
  expect(TaskPresent).toBeTruthy();
  const title = "Test title";
  const task = defaultTask;
  // https://blog.logrocket.com/guide-vitest-automated-testing-vue-components
  test('TaskPresent_with_title', async () => {
    const wrapper = mount(TaskPresent, {
      props: { task, title }
    })
    console.log(wrapper.text())
    expect(wrapper.text()).toContain(title)
  })

  test('TaskPresent_without_title', async () => {
    const wrapper = mount(TaskPresent, {
      props: { task }
    })
    console.log(wrapper.text())
    expect(wrapper.text()).toContain("任务" + task.name + "详情")
  })

  test('TaskPresent_with_loading', async () => {
    const wrapper = mount(TaskPresent, {
      props: { task }
    })
    const task_alter = {
      ...task,
      name: "a_new_task"
    }
    expect(wrapper.text()).toContain("任务" + task.name + "详情")

    await wrapper.setProps({ task: task_alter })
    console.log(task_alter)
    expect(wrapper.text()).toContain("任务" + task_alter.name + "详情")
    await wrapper.setProps({ task, title })
    expect(wrapper.text()).toContain(title)
  })
})