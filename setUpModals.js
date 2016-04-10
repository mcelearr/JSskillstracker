var types = ['Numbers', 'Strings', 'Booleans', 'Arrays', 'Undefined and null', 'Objects', 'Arithmetic operators', 'Logical operators', 'Other operators']

types.map(t => {
  var nodeModal = document.createElement('div')
  nodeModal.id = 'modal' + types.indexOf(t)
  nodeModal.className = 'modal modal-fixed-footer'
  var nodeContent = document.createElement('div')
  nodeContent.className = 'modal-content'
  var h4 = document.createElement('h4')
  h4.innerHTML = t
  nodeContent.appendChild(h4)
  var ul = document.createElement('ul')
  ul.id = 'content' + types.indexOf(t)
  nodeContent.appendChild(ul)
  nodeModal.appendChild(nodeContent)
  var nodeFooter = document.createElement('div')
  nodeFooter.className = 'modal-footer'
  var a = document.createElement('a')
  a.href = '#!'
  a.className = 'modal-action modal-close waves-effect waves-green btn-flat'
  a.innerHTML = 'Back'
  nodeFooter.appendChild(a)
  nodeModal.appendChild(nodeFooter)
  document.getElementById('modals').appendChild(nodeModal)
})
