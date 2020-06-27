export class ChildrenChip {
  constructor(data) {
    this.id = data.id
    this.name = data.full_name || ''
    this.birthDay = data.birth_day || ''
  }
}

export class ChildrenChipAttendance {
  constructor(data) {
    this.id = data.id
    this.firstName = data.first_name || ''
    this.lastName = data.last_name || ''
    this.birthDay = data.birth_day || ''
    // для плоской структуры
    this.presence = data.attendance.presence || null
    this.attendance = {
      id: data.attendance.id,
      event: data.attendance.event,
      recipient: data.attendance.recipient,
      presence: data.attendance.presence
      // presence: 'Присутствовал'
    }

    Object.defineProperty(this, 'name', {
      get() {
        const text = []
        if (this.firstName !== '') text.push(this.firstName)
        if (this.lastName !== '') text.push(this.lastName)
        return text.join(' ')
      }
    })
  }

  static mappingForSaveAttendance({ idEvent, idChildren, presence }) {
    if (!idEvent || !idChildren || !presence) throw new Error('some attendance fields are blank')

    const obj = {
      event: idEvent,
      recipient: idChildren,
      presence: presence
    }
    return obj
  }

  static mappingForUpdateAttendance({ idAttendance, presence }) {
    if (!idAttendance || !presence) throw new Error('some attendance fields are blank')

    const obj = {
      id: idAttendance,
      presence: presence
    }
    return obj
  }
}
