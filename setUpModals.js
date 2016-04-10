var types = ['Numbers', 'Strings', 'Booleans', 'Arrays', 'Undefined and null', 'Objects', 'Arithmetic operators', 'Logical operators', 'Other operators']

types.map(t => {
  var h4 = document.createElement('h4')
      h4.innerHTML = t
  var ul = document.createElement('ul')
      ul.id = 'content' + types.indexOf(t)
  var nodeContent = document.createElement('div')
      nodeContent.className = 'modal-content'
      nodeContent.appendChild(h4)
      nodeContent.appendChild(ul)
  var a = document.createElement('a')
      a.href = '#!'
      a.className = 'modal-action modal-close waves-effect waves-green btn-flat'
      a.innerHTML = 'Back'
  var nodeFooter = document.createElement('div')
      nodeFooter.className = 'modal-footer'
      nodeFooter.appendChild(a)
  var nodeModal = document.createElement('div')
      nodeModal.id = 'modal' + types.indexOf(t)
      nodeModal.className = 'modal modal-fixed-footer'
      nodeModal.appendChild(nodeContent)
      nodeModal.appendChild(nodeFooter)
  document.getElementById('modals').appendChild(nodeModal)
})
