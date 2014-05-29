getEditor = function() {
    return $('#liveEditor')
}

updateEditor = function(id) {
    textarea = getEditor()[0]
    Posts.update(id, {
        $set: {
            text: textarea.value
        }
    })
}

Template.editor.events({
    'keyup #liveEditor': function(event, template) {
        updateEditor(this._id)
    }
})

Template.selectFile.events({
    'click .select.file': function(event, template) {
        $('#insertFile').modal('hide')
        if (this.type().split('/')[0] === 'image') {
            string = '![' + this.name() + '](' + this.url().split('?')[0] + ')'
            insertText(string)
        } else {
            string = '[' + this.name() + '](' + this.url().split('?')[0] + ')'
            insertText(string)
        }
    }
})

Template.selectFile.uploads = function() {
    return Uploads.find({}, {
        sort: {
            'metadata.date': -1
        }
    })
}

insertText = function(string) {
    textarea = getEditor()
    text = textarea.val()
    range = textarea.textrange('get')
    textBefore = text.substring(0, range.start),
    textMiddle = text.substring(range.start, range.end)
    textAfter = text.substring(range.end, text.length);
    textarea.val(textBefore + string + textMiddle + textAfter);
}